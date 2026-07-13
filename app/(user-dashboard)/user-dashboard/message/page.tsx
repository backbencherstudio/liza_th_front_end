"use client";

import { useState, useRef } from "react";
import { Paperclip, Send, Mic, Square, X } from "lucide-react";

export default function ChatPage() {
    const [input, setInput] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [audioPreview, setAudioPreview] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const streamRef = useRef<MediaStream | null>(null);

    type Message = {
        id: number;
        sender: "user" | "bot";
        text: string;
        avatar: string;
        file?: File | null;
        fileUrl?: string;
        audio?: string;
    };

    const [messages, setMessages] = useState<Message[]>([
        { id: 1, sender: "bot", text: "Hey there, buddy! How can I help you?", avatar: "/bot.png" },
        { id: 2, sender: "user", text: "How do I upload a financial report?", avatar: "/user.png" },
        { id: 3, sender: "bot", text: "To upload a report:\n\n• Go to Reports\n• Click Upload Report", avatar: "/bot.png" },
    ]);

    // Start Recording
    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            audioChunksRef.current = [];

            mediaRecorder.ondataavailable = (e) => {
                if (e.data.size > 0) audioChunksRef.current.push(e.data);
            };

            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
                const audioUrl = URL.createObjectURL(audioBlob);
                setAudioPreview(audioUrl);
            };

            mediaRecorder.start(100); // Small chunks
            setIsRecording(true);
            setRecordingTime(0);

            timerRef.current = setInterval(() => {
                setRecordingTime((prev) => prev + 1);
            }, 1000);
        } catch (err) {
            alert("Please allow microphone permission");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
        if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
        if (timerRef.current) clearInterval(timerRef.current);
        setIsRecording(false);
    };

    // Send Voice
    const sendVoice = () => {
        if (!audioPreview) return;

        const userMessage: Message = {
            id: Date.now(),
            sender: "user",
            text: input,
            avatar: "/user.png",
            audio: audioPreview,
        };

        setMessages(prev => [...prev, userMessage]);
        setAudioPreview(null);
        setInput("");
    };

    const cancelPreview = () => {
        if (audioPreview) URL.revokeObjectURL(audioPreview);
        setAudioPreview(null);
    };

    const handleSend = () => {
        if (isRecording) return;

        if (audioPreview) {
            sendVoice();
            return;
        }

        if (!input.trim() && !file) return;

        const userMessage: Message = {
            id: Date.now(),
            sender: "user",
            text: input,
            avatar: "/user.png",
            file: file || undefined,
            fileUrl: file ? URL.createObjectURL(file) : undefined,
        };

        setMessages(prev => [...prev, userMessage]);

        setInput("");
        setFile(null);

        // Bot reply
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: "bot",
                text: "Got it! Thank you.",
                avatar: "/bot.png",
            }]);
        }, 800);
    };

    return (
        <div className="max-w-md mx-auto rounded-xl overflow-hidden border shadow-lg bg-white">

            <div className="bg-blue-700 text-white p-4">
                <h2 className="text-xl font-bold">AI Assistant</h2>
                <p className="text-sm text-green-300">● Online</p>
            </div>

            {/* Messages */}
            <div className="h-[450px] overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} gap-3`}>
                        {msg.sender === "bot" && (
                            <img src={msg.avatar} className="w-9 h-9 rounded-full mt-1" alt="" />
                        )}

                        <div className="max-w-[78%]">
                            {/* Image Preview */}
                            {msg.fileUrl && (
                                <img
                                    src={msg.fileUrl}
                                    className="max-w-[240px] rounded-2xl mb-2 shadow-sm"
                                    alt="uploaded"
                                />
                            )}

                            {/* Audio */}
                            {msg.audio && (
                                <audio controls className="w-full max-w-xs rounded-xl bg-black">
                                    <source src={msg.audio} type="audio/webm" />
                                    Your browser does not support audio.
                                </audio>
                            )}

                            {/* Text */}
                            {msg.text && (
                                <div className={`rounded-2xl px-4 py-3 ${msg.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100"}`}>
                                    {msg.text}
                                </div>
                            )}
                        </div>

                        {msg.sender === "user" && (
                            <img src={msg.avatar} className="w-9 h-9 rounded-full mt-1" alt="" />
                        )}
                    </div>
                ))}
            </div>

            {/* Voice Preview */}
            {audioPreview && (
                <div className="mx-4 mb-3 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                    <div className="flex items-center gap-3 bg-black">
                        <audio controls className="flex-1 bg-green-700">
                            <source src={audioPreview} type="audio/webm" className="bg-black" />
                        </audio>
                        <button onClick={cancelPreview} className="text-red-500 hover:bg-red-100 p-2 rounded-lg">
                            <X size={22} />
                        </button>
                    </div>
                    <p className="text-xs text-center text-blue-600 mt-2">Voice Preview — Click Send to send</p>
                </div>
            )}

            {/* Input Area */}
            <div className="flex items-center gap-2 border-t p-3">
                <label className="cursor-pointer p-3 hover:bg-gray-100 rounded-xl">
                    <Paperclip size={24} />
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => {
                            if (e.target.files?.[0]) setFile(e.target.files[0]);
                        }}
                    />
                </label>

                <textarea
                    placeholder="Type message..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 h-14 pt-4 rounded-2xl border px-4 py-3 resize-none outline-none"
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
                />

                <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`p-3 rounded-2xl ${isRecording ? "bg-red-500 text-white animate-pulse" : "hover:bg-gray-100"}`}
                >
                    {isRecording ? <Square size={26} /> : <Mic size={26} />}
                </button>

                <button
                    onClick={handleSend}
                    className="bg-blue-700 text-white p-3 rounded-2xl hover:bg-blue-800"
                >
                    <Send size={22} />
                </button>
            </div>

            {isRecording && (
                <div className="text-red-500 text-sm flex justify-center items-center gap-2 pb-3">
                    <span className="animate-pulse">●</span> Recording {Math.floor(recordingTime / 60)}:
                    {(recordingTime % 60).toString().padStart(2, '0')}
                </div>
            )}
        </div>
    );
}