'use client'

import { Button } from '@kit/ui/button'
import { useCallback, useState } from 'react'
import { Editor } from '@tiptap/react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@kit/ui/dropdown-menu"

const ZOOM_PRESETS = [
  { label: 'Fit', value: '100', id: 'fit' },
  { label: '50%', value: '50', id: 'zoom-50' },
  { label: '75%', value: '75', id: 'zoom-75' },
  { label: '90%', value: '90', id: 'zoom-90' },
  { label: '100%', value: '100', id: 'zoom-100' },
  { label: '125%', value: '125', id: 'zoom-125' },
  { label: '150%', value: '150', id: 'zoom-150' },
  { label: '200%', value: '200', id: 'zoom-200' },
]

export function ToolbarZoom({ editor }: { editor: Editor }) {
  const [zoom, setZoom] = useState('100')

  const updateZoom = useCallback(
    (newZoom: string) => {
      const zoomValue = parseInt(newZoom)
      if (zoomValue >= 25 && zoomValue <= 400) {
        const scale = zoomValue / 100
        const editorContent = editor.view.dom.parentElement
        if (editorContent) {
          editorContent.style.transform = `scale(${scale})`
          editorContent.style.transformOrigin = 'left top'
          setZoom(newZoom)
        }
      }
    },
    [editor]
  )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[100px]">
          {zoom}%
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {ZOOM_PRESETS.map((preset) => (
          <DropdownMenuItem
            key={preset.id}
            onClick={() => updateZoom(preset.value)}
          >
            {preset.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
