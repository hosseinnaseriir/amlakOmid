function Btn({title,myClass,icon=null,type=null,onClick}) {
  return (
    <button className={"btn "+myClass } type={type} onClick={onClick}>
      {icon}
      {title}
    </button>
  );
}

export default Btn;