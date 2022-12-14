import { NodeViewWrapper } from "@tiptap/react";
import React, { useRef, useState } from "react";
import { Document, Page } from "react-pdf";
export default (props: any) => {
  const [use, setuse] = useState<any>();
  React.useEffect(() => {}, []);

  const ref = useRef(null);
  const [file,setFile] = useState<any>()
  const changeHandler = (event: any) => {
    props.updateAttributes({
      selectedFile: event.target.files[0],
      isFilePicked: true,
    });
    setFile(URL.createObjectURL(event.target.files[0]))
  };
   function handleSubmission(blob:any) {
    return  window.URL.createObjectURL(blob)
  };

  return (
    <NodeViewWrapper className="react-component">
      <div>
        <input type="file" name="file" onChange={changeHandler} />
        {props.node.attrs.isFilePicked ? (
          <div>
            <p>Filename: {props.node.attrs.selectedFile.name}</p>
            <p>Filetype: {props.node.attrs.selectedFile.type}</p>
            <p>Size in bytes: {props.node.attrs.selectedFile.size}</p>
            <p>
              lastModifiedDate:{" "}
              {props.node.attrs.selectedFile.lastModifiedDate.toLocaleDateString()}
            </p>
            <img src={file}/>
            {props.node.attrs.isSelected && <Document file={use} />}
          </div>
        ) : (
          <p>Select a file to show details</p>
        )}
        <div>
          <button onClick={handleSubmission}>Submit</button>
        </div>
      </div>
    </NodeViewWrapper>
  );
};
