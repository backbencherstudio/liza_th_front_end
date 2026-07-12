"use client";

import { useEditor, EditorContent, type Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import { TextStyle, FontSize } from "@tiptap/extension-text-style";
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Strikethrough,
  Type,
  Underline as UnderlineIcon,
} from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import type { FieldError } from "react-hook-form";

const FONT_SIZES = ["12", "14", "16", "18", "20", "24", "28", "32"] as const;
const DEFAULT_FONT_SIZE = "16";

type FormRichTextEditorProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: FieldError;
};

function getCurrentFontSize(editor: Editor) {
  const fontSize = editor.getAttributes("textStyle").fontSize as
    | string
    | undefined;

  if (!fontSize) return DEFAULT_FONT_SIZE;

  return fontSize.replace("px", "");
}

function FontSizeSelect({ editor }: { editor: Editor }) {
  const savedSelection = useRef<{ from: number; to: number } | null>(null);
  const currentSize = getCurrentFontSize(editor);

  const saveSelection = () => {
    const { from, to } = editor.state.selection;
    savedSelection.current = { from, to };
  };

  const applyFontSize = (size: string) => {
    const fontSize = `${size}px`;
    const chain = editor.chain().focus();

    if (savedSelection.current) {
      chain.setTextSelection(savedSelection.current);
      savedSelection.current = null;
    }

    chain.setFontSize(fontSize).run();
  };

  return (
    <div className="mr-2 flex items-center gap-1 rounded border border-solid border-[#E9E9EA] bg-white px-2 py-1">
      <select
        value={currentSize}
        aria-label="Font size"
        onMouseDown={saveSelection}
        onFocus={saveSelection}
        onChange={(event) => {
          applyFontSize(event.target.value);
        }}
        className="cursor-pointer appearance-none bg-transparent pr-1 font-[Archivo] text-xs font-medium text-gray-600 outline-none"
      >
        {FONT_SIZES.map((size) => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </select>
      <Type size={12} className="pointer-events-none text-gray-400" />
    </div>
  );
}

function ToolbarButton({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded p-1.5 transition-colors ${
        active
          ? "bg-white text-blue-600 shadow-sm"
          : "text-gray-600 hover:bg-white"
      }`}
    >
      {children}
    </button>
  );
}

function ToolbarDivider() {
  return <div className="mx-1 h-5 w-px bg-gray-300" />;
}

export function FormRichTextEditor({
  value,
  onChange,
  label,
  error,
}: FormRichTextEditorProps) {
  const isInternalUpdate = useRef(false);

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      FontSize,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
    ],
    content: value,
    immediatelyRender: false,
    shouldRerenderOnTransaction: true,
    editorProps: {
      attributes: {
        class:
          "min-h-[350px] p-4 font-[Archivo] text-base leading-relaxed text-[#1A1A1A] focus:outline-none [&_h3]:mb-2 [&_h3]:text-base [&_h3]:font-semibold [&_ol]:mb-3 [&_ol]:list-decimal [&_ol]:pl-5 [&_p]:mb-3 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_span]:leading-relaxed",
      },
    },
    onUpdate: ({ editor: currentEditor }) => {
      isInternalUpdate.current = true;
      onChange(currentEditor.getHTML());
    },
  });

  useEffect(() => {
    if (!editor) return;

    if (isInternalUpdate.current) {
      isInternalUpdate.current = false;
      return;
    }

    const currentHtml = editor.getHTML();
    if (value !== currentHtml) {
      editor.commands.setContent(value, { emitUpdate: false });
    }
  }, [editor, value]);

  return (
    <div className="flex w-full flex-col">
      {label && (
        <label className="mb-2 font-[Archivo] text-sm font-semibold text-[#1A1A1A]">
          {label}
        </label>
      )}

      <div className="w-full overflow-hidden rounded-xl border border-solid border-[#E9E9EA] bg-[#FAFBFC]">
        {editor && (
          <div className="flex flex-wrap items-center gap-1 border-b border-solid border-[#E9E9EA] bg-[#F4F4F5] p-2">
            <FontSizeSelect editor={editor} />

            <ToolbarButton
              active={editor.isActive("bold")}
              onClick={() => editor.chain().focus().toggleBold().run()}
            >
              <Bold size={16} />
            </ToolbarButton>
            <ToolbarButton
              active={editor.isActive("italic")}
              onClick={() => editor.chain().focus().toggleItalic().run()}
            >
              <Italic size={16} />
            </ToolbarButton>
            <ToolbarButton
              active={editor.isActive("underline")}
              onClick={() => editor.chain().focus().toggleUnderline().run()}
            >
              <UnderlineIcon size={16} />
            </ToolbarButton>
            <ToolbarButton
              active={editor.isActive("strike")}
              onClick={() => editor.chain().focus().toggleStrike().run()}
            >
              <Strikethrough size={16} />
            </ToolbarButton>

            <ToolbarDivider />

            <ToolbarButton
              active={editor.isActive({ textAlign: "left" })}
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
            >
              <AlignLeft size={16} />
            </ToolbarButton>
            <ToolbarButton
              active={editor.isActive({ textAlign: "center" })}
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
            >
              <AlignCenter size={16} />
            </ToolbarButton>
            <ToolbarButton
              active={editor.isActive({ textAlign: "right" })}
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
            >
              <AlignRight size={16} />
            </ToolbarButton>

            <ToolbarDivider />

            <ToolbarButton
              active={editor.isActive("bulletList")}
              onClick={() => editor.chain().focus().toggleBulletList().run()}
            >
              <List size={16} />
            </ToolbarButton>
            <ToolbarButton
              active={editor.isActive("orderedList")}
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
            >
              <ListOrdered size={16} />
            </ToolbarButton>
          </div>
        )}

        <div className="border-t border-solid border-[#E9E9EA] bg-white">
          <EditorContent editor={editor} />
        </div>
      </div>

      {error && (
        <p className="mt-1 font-[Archivo] text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
}
