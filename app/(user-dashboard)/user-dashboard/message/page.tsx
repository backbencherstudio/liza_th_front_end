"use client";

import { useState, useRef, useEffect } from "react";
import { Paperclip, Send, Mic, Square, X, Minus, ArrowUpToLine, ArrowBigUp, ArrowUp } from "lucide-react";
import Image from "next/image";

interface MessagePageProps {
    onClose?: () => void;
}

export default function MessagePage({ onClose }: MessagePageProps) {
    const [input, setInput] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [isRecording, setIsRecording] = useState(false);
    const [recordingTime, setRecordingTime] = useState(0);
    const [audioPreview, setAudioPreview] = useState<string | null>(null);

    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);
    const streamRef = useRef<MediaStream | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    type Message = {
        id: number;
        sender: "user" | "bot";
        text?: string;
        avatar: string;
        fileUrl?: string;
        audio?: string;
    };

    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            sender: "bot",
            text: "Hey there, buddy! How can I help you?",
            avatar: "/images/spike-logo.png"
        },
        {
            id: 2,
            sender: "user",
            text: "How do I upload a financial report?",
            avatar: "/images/messagesUser.png"
        },
        {
            id: 3,
            sender: "bot",
            text: "To upload a report:\n\n• Go to Reports.\n• Click Upload Report.\n• Select your Excel, CSV, or PDF file.\n• Wait for the AI to process the data.",
            avatar: "/images/spike-logo.png"
        },
    ]);

    // Auto scroll to bottom when new message arrives
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // Start Voice Recording
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

            mediaRecorder.start(100);
            setIsRecording(true);
            setRecordingTime(0);

            timerRef.current = setInterval(() => {
                setRecordingTime((prev) => prev + 1);
            }, 1000);
        } catch (err) {
            alert("Microphone permission is required");
        }
    };

    // Stop Recording
    const stopRecording = () => {
        if (mediaRecorderRef.current) mediaRecorderRef.current.stop();
        if (streamRef.current) streamRef.current.getTracks().forEach(t => t.stop());
        if (timerRef.current) clearInterval(timerRef.current);
        setIsRecording(false);
    };

    // Cancel Voice Preview
    const cancelPreview = () => {
        if (audioPreview) URL.revokeObjectURL(audioPreview);
        setAudioPreview(null);
    };

    // Send Message / Voice
    const handleSend = () => {
        if (isRecording) return;

        if (audioPreview) {
            const userMsg: Message = {
                id: Date.now(),
                sender: "user",
                audio: audioPreview,
                avatar: "/images/messagesUser.png",
            };
            setMessages(prev => [...prev, userMsg]);
            setAudioPreview(null);
            return;
        }

        if (!input.trim() && !file) return;

        const userMsg: Message = {
            id: Date.now(),
            sender: "user",
            text: input,
            avatar: "/images/messagesUser.png",
            fileUrl: file ? URL.createObjectURL(file) : undefined,
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setFile(null);

        // Simulate Bot Reply
        setTimeout(() => {
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                sender: "bot",
                text: "Got it! Thank you for your message.",
                avatar: "/images/spike-logo.png",
            }]);
        }, 800);
    };

    return (
        <div className="flex  flex-col h-[400px] lg:h-[630px] bg-white rounded-2xl overflow-hidden border shadow-2xl">
            {/* Header */}
            <div className="bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white p-4 flex items-center gap-3 relative">
                <div className="w-10 h-10 bg-white rounded-full overflow-hidden flex-shrink-0">
                    <Image src="/images/spike-logo.png" alt="Spike" width={40} height={40} />
                </div>
                <div>
                    <h2 className="font-bold text-lg">Spike Technology</h2>
                    <p className="text-sm text-green-300 flex items-center gap-1">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Online
                    </p>
                </div>

                {/* Close / Minimize Button */}
                {onClose && (
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 border rounded-full border-white text-white/80 hover:text-white transition-colors"
                    >
                        <Minus />
                    </button>
                )}
            </div>

            {/* Messages Area with Scrollbar */}
            {/* Messages Area with Scrollbar */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4  scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} gap-3`}
                    >
                        {/* Bot Avatar */}
                        {msg.sender === "bot" && (
                            <div className="bg-white p-1.5 h-12 w-12 rounded-full flex-shrink-0 mt-1 shadow-sm">
                                <Image
                                    src={msg.avatar}
                                    width={36}
                                    height={36}
                                    className="w-9 h-9 rounded-full"
                                    alt=""
                                />
                            </div>
                        )}

                        {/* Message Content */}
                        <div className={`max-w-[75%] ${msg.sender === "user" ? "items-end" : ""}`}>
                            {msg.fileUrl && (
                                <img
                                    src={msg.fileUrl}
                                    className="max-w-[240px] rounded-2xl mb-2 shadow"
                                    alt="uploaded"
                                />
                            )}
                            {msg.audio && (
                                <div className="mb-2">
                                    <audio controls className="max-w-xs rounded-xl">
                                        <source src={msg.audio} type="audio/webm" />
                                    </audio>
                                </div>
                            )}
                            {msg.text && (
                                <div className={`rounded-2xl px-4 py-3 text-[15px] leading-relaxed break-words ${msg.sender === "user"
                                    ? "bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white rounded-br-none"
                                    : "bg-[#F3F5F6] border border-gray-200 shadow-sm rounded-bl-none"
                                    }`}>
                                    {msg.text}
                                </div>
                            )}
                        </div>

                        {/* User Avatar - Fixed */}
                        {msg.sender === "user" && (
                            <div className=" rounded-full flex-shrink-0 mt-1 shadow-sm self-start">
                                <Image
                                    src={msg.avatar}
                                    width={36}
                                    height={36}
                                    className="w-9 h-9 rounded-full"
                                    alt=""
                                />
                            </div>
                        )}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Voice Preview */}
            {audioPreview && (
                <div className="mx-4 mb-3 p-4 bg-blue-50 border border-blue-200 rounded-2xl">
                    <div className="flex items-center gap-3">
                        <audio controls className="flex-1">
                            <source src={audioPreview} type="audio/webm" />
                        </audio>
                        <button
                            onClick={cancelPreview}
                            className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
                        >
                            <X size={24} />
                        </button>
                    </div>
                    <p className="text-center text-xs text-blue-600 mt-2">Voice message ready — Click Send</p>
                </div>
            )}

            {/* Input Area */}
            <div className="border-t p-4 bg-white">
                {/* Input Area - Modern Style */}
                <div className=" bg-white ">
                    <div className="relative flex items-end gap-2 bg-gray-50 border border-gray-200 rounded-3xl px-4 py-2 min-h-[56px]">

                        {/* File Upload */}
                        <label className="p-2 hover:bg-gray-200 rounded-xl cursor-pointer flex-shrink-0 self-end mb-1">
                            <Paperclip size={24} className="text-[#0A206D]" />
                            <input
                                type="file"
                                className="hidden"
                                accept="image/*,.pdf,.csv,.xlsx"
                                onChange={(e) => e.target.files && setFile(e.target.files[0])}
                            />
                        </label>

                        {/* Textarea */}
                        <textarea
                            placeholder="Enter message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
                            className="flex-1 bg-transparent outline-none resize-y min-h-[24px] max-h-[160px] py-3 px-2 text-[15px] leading-relaxed"
                            rows={1}
                        />

                        {/* Voice Button */}
                        <button
                            onClick={isRecording ? stopRecording : startRecording}
                            className={`p-2 rounded-xl flex-shrink-0 self-end mb-1 transition-all ${isRecording
                                ? "bg-red-500 text-white animate-pulse"
                                : "hover:bg-gray-200 text-[#0A206D]"
                                }`}
                        >
                            {isRecording ? <Square size={26} /> : <Mic size={26} />}
                        </button>

                        {/* Send Button */}
                        <button
                            onClick={handleSend}
                            className="bg-[linear-gradient(144deg,#0A206D_0%,#3B69D0_100%)] text-white p-2 rounded-xl flex-shrink-0 self-end mb-1 hover:bg-blue-700 transition-colors"
                        >
                            <ArrowUp />
                        </button>
                    </div>

                    {/* Recording Indicator */}
                    {/* {isRecording && (
                        <div className="text-red-500 text-sm flex justify-center items-center gap-2 mt-3">
                            <span className="animate-pulse">●</span>
                            Recording {Math.floor(recordingTime / 60)}:{(recordingTime % 60).toString().padStart(2, '0')}
                        </div>
                    )} */}
                </div>


            </div>
        </div>
    );
}