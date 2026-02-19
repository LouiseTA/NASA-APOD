export default function Footer(props) {
  const { handleToggleModal, data } = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h1>NASA - APOD PROJECT</h1>
        <h2>{data?.title}</h2>
        <h5 className="author">Desenvolvido por Gabriele Louise</h5>
      </div>
      <button onClick={handleToggleModal}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}
