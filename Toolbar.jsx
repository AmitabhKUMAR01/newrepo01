import { ToolbarHeadings } from "./ToolbarHeadings";
import { ToolbarInline } from "./ToolbarInline";
import { ToolbarAlignment } from "./ToolbarAlignment";
import { ToolbarBlock } from "./ToolbarBlock";
import { ToolbarFontFamily } from "./ToolbarFontfamily";
import TextBackgroundColor from "./TextBackgroundColor";
import { ToolbarFontSizeStepper } from "./ToolbarFontSizeStepper";
import TextColor from "./TextColor";
import { Editor } from "@tiptap/react";
import { Separator } from "@kit/ui/separator";
import { ToolbarZoom } from "./ToolbarZoom";

export default function Toolbar({ editor }: { editor: Editor }) {
  return (
    <>
      <div>
        <div className="h-[60px] flex items-center justify-start px-4 gap-2 p-1.5 overflow-auto min-x-full border-b border-border/80 bg-background [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-border">
            <ToolbarFontFamily editor={editor} />
            <ToolbarHeadings editor={editor} />
            <ToolbarZoom editor={editor} />
            <ToolbarFontSizeStepper editor={editor} />
            <Divider/>
            <ToolbarInline editor={editor} />
            <Divider/>
            <TextColor editor={editor} />
            <TextBackgroundColor editor={editor} />
            <Divider/>
            <ToolbarBlock editor={editor} />
            <Divider/>
            <ToolbarAlignment editor={editor} />
        </div>
      </div>
    </>
  );
}

function Divider() {
  return <Separator className="h-8 w-[1px]" />
}

