import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
    // nj01137y139salgxshw4m4jitb6f9iw21vrqlp9roqcm9eff
    // nj01137y139salgxshw4m4jitb6f9iw21vrqlp9roqcm9eff
    // <script src="https://cdn.tiny.cloud/1/nj01137y139salgxshw4m4jitb6f9iw21vrqlp9roqcm9eff/tinymce/7/tinymce.min.js" referrerpolicy="origin"></script>
console.log(import.meta.env.VITE_TINYMCE_EDITOR);


  return (
    <div className='w-full '> 
    {label && <label className='inline-block mb-1 pl-1 text-red-800'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        initialValue={defaultValue}

        apiKey={import.meta.env.VITE_TINYMCE_EDITOR}      
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px  }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}
