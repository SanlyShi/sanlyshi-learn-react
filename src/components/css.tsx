 import moduleStyle from '../assets/scss/moduleStyle.module.scss'
 //模块内的 CSS 仅适用于导入它的组件，您不必担心名称冲突。

 
 function CssModule(){
    const colorB:boolean = true
    const styleDiv = {
        color:'yellow',
        border:'solid 2px #fff'
    }
    return (<div>
        <div className="div_b bgr">div 1</div>
        <div className={"div_b bgr"}>div 2</div>
        <div className={`${colorB}?"bgr":"" div_b`}>div 3</div>
        <div style={{color:`${colorB?"blue":""}`,border:'solid 1px red',margin:'10px'}}>div4</div>
        <div style={styleDiv}>div5</div>
        <div className={moduleStyle.moduleScss}>div6</div>
    </div>)
}
export default CssModule