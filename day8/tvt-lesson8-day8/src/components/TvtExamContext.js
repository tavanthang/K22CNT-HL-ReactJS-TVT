import React, { useContext } from 'react'
import TvtExamInfo from './TvtExamInfo'
import { ThemeContext } from './TvtExampleContext';


export default function TvtExamContext() {
    let theme = useContext(ThemeContext);
  return (
    <div>
        <p>
            Ap dung:
            <bt/>
            <span className={theme}></span>
            useContext la mot react hook cho phep truy cap du lieu tu context ma khong can phai truyen porps qua 
            nhieu cap (tranh tinh trang props drlling)

        </p>
        <TvtExamInfo />

    </div>
  )
}
