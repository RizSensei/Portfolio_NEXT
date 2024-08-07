import AnimatedNumbers from "@/components/Basic/AnimatedNumbers";
import Bento from "@/components/Basic/Bento";
import React from "react";

const DataCount = ({ number, title }) => {
  return (
    <Bento>
      <div className="text-center flex flex-col items-center gap-3">
        <Bento bgColor={false} style="w-max text-4xl">
          {
            number !== 0 ? <AnimatedNumbers value={number} /> : 0
          }
        </Bento>
        
        <p className="text-sm tektur-regular">{title}</p>
      </div>
    </Bento>
  );
};

export default DataCount;
