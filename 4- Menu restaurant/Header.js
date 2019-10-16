

const Header = (props) => { 
    let orderList = props.items;
    orderList = orderList.filter(item=> item.active);
    const number = orderList.length;
    return (
    <>
        <h2>Wielkośc zamówienia: {number}</h2>
        <h2>Do zapłaty: {number ? `${number * 10} złotych` : 'nie kupujesz, to nie płacisz'}</h2>
    </>
    )
}