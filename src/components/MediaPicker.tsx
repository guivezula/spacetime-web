'use client'

import Image from 'next/image'
import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  function onFileSelected(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = URL.createObjectURL(event.target.files[0])
      setPreview(file)
    }
  }

  return (
    <div>
      <input
        type="file"
        id="media"
        className="invisible h-0 w-0"
        onChange={onFileSelected}
      />

      {preview && (
        <Image
          width={500}
          height={500}
          className="h-[280px] w-[100%] rounded-lg"
          src={preview}
          alt=""
        />
      )}
    </div>
  )
}
