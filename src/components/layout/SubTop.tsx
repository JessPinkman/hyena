const SubTop = () => {
  return (
    <div className="subtop heading--big">
      <div className="color--soft">工單</div>
      <div className="color--success heading--strong">
        MOT-002 Function Test
      </div>
      <div className="color--soft ml:auto">不良品</div>
      <div className="mr:4">
        <span className="color--alert heading--strong mr:2">0</span>
        <span className="color--clear heading--strong">個</span>
      </div>
      <div className="color--soft">已完成</div>
      <div className="success_indicator heading--strong">
        <span className="color--success">0</span>
        <span className="color--clear">/</span>
        <span className="color--success">XXX</span>
        <span className="color--clear">個</span>
      </div>
    </div>
  );
};

export default SubTop;
