

function List(props) {
    const itemList = props.Items;
    const category = props.category;

      //  fruits.sort((a,b)=>a.name.localeCompare(b.name)) //alphabetic sorting
      //  fruits.sort((a,b)=>b.name.localeCompare(a.name))  // reverse alphabetic
      //  fruits.sort((a,b)=> a.cal-b.cal) //ascending order
      //  fruits.sort((a,b)=> b.cal-a.cal)  // desending order

   //const lowcal = fruits.filter(fruit=> fruit.cal<=100)
   // const highcal = fruits.filter(fruit=> fruit.cal>=100)

        const items = itemList.map(item => (
            <li key={item.id}>
                {item.name}
                :&nbsp;
                <b>
                {item.cal}
                </b>
            </li>
        ));


    return (<>

    <div className="n">
        <div className="c">{category}</div>
        <ol>{items}</ol>
    </div>
    
    </>);


}

export default List;