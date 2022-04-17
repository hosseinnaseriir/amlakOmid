function Btn({title,myClass,icon=null,type=null}) {
  return (
    <button className={"btn "+myClass } type={type}>
      {icon}
      {title}
    </button>
  );
}

export default Btn;