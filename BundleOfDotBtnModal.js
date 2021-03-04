import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DotBtn from "./DotBtn";
import DotModal from "./DotModal";

/**
 *
 * @param {string} loading - size(점), divStyle 지정, DotModal.js 를 참고해서 속성으로 datatype={"1"} 또는 {"2"}를 추가해주세요.
 */

export default function BundleOfDotBtnModal(props) {
  const [show, setShow] = useState(false);

  const { datatype, size, dotBtnDivStyles, clickModalBtn } = props;

  return (
    <BundleOfDotBtnModalWrapper show={show}>
      <DotBtn
        onClick={() => setShow(true)}
        size={size}
        dotBtnDivStyles={dotBtnDivStyles}
      />
      <DotModal
        onClose={() => setShow(false)}
        show={show}
        datatype={datatype}
        clickModalBtn={clickModalBtn}
      />
    </BundleOfDotBtnModalWrapper>
  );
}

const BundleOfDotBtnModalWrapper = styled.div`
  /* border: 1px solid black; */
  display: "inline-table";
`;
