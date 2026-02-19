export default function SideBar(props) {
  const { handleToggleModal, data } = props;

  return (
    <div className="sidebar">
      <div onClick={handleToggleModal} className="bgOverlay"></div>
      <div className="sidebarContents">
        <h3>{data?.title}</h3>
        <div className="descriptionContainer">
          <h4 className="descriptionTitle">{data?.date}</h4>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
          <i className="fa-solid fa-circle-right"></i>
        </button>
      </div>
    </div>
  );
}
