const InputCount = ({ onAdd,stock }) => {
    <>
        <input onChange={onAdd} />
        <h1>{stock}</h1> 
    </>
};

const ButtonCount = ({ onAdd, stock }) => (
    <>
        <button onClick={onAdd}>Ejecutar onAdd</button>
        <h1>{stock}</h1>
    </>
);

const Intercambiabilidad = ({countType}) => {
    const onAdd = () => console.log("this is triggering onAdd");
    const Count = countType == "button" ? ButtonCount : InputCount;
    return (
        <>
            <Count onAdd={onAdd} stock={4} />
        </>
    );
};

export default Intercambiabilidad;