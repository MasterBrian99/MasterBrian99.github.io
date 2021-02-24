
type prop =
    { name: string; }

const MainName = ({ name }: prop) => {
    return (
        <h1 className='main-name'>{name}</h1>

    )
}

export default MainName
