import React, {Component, useState} from "react";
import '../styles/App.css';

let arr = ["Siblings", "Friends", "Love", "Affection", "Marriage", "Enemy"]

const App = () => {
    // render() {
        const [name1, setname1] = useState("");
        const [name2, setname2] = useState("");
        const [relationship, setRelationship] = useState("");
        
        function claculateRelation() {
            // preventDefault();
            if(name1.trim() === '' || name2.trim === '') {
                setRelationship("Please Enter valid input");
                return;
            }
            let str1=name1
            let str2 = name2
    
            for(let i of str1){
                if(str2.includes(i)){
                    str1 = str1.replace(i, "")
                    str2 =str2.replace(i,"")
                }
            }
            setname1(str1)
            setname2(str2)
            
            setRelationship(arr[(str1.length + str2.length)%6])
    
        }
        return(
            <div id="main">
               {/* Do not remove the main div */}
               <input type="text" data-testid="input1" placeholder="Enter first name" name="name1" value={name1} onChange={(e) => setname1(e.target.value)} />
               <input type="text" data-testid="input2" placeholder="Enter second name" name="name2" value={name2} onChange={(e) => setname2(e.target.value)} />
               <button data-testid="calculate_relationship" onClick={claculateRelation} type="submit">Calculate Relationship Future</button>
               <button onClick={()=>{
                 setname1("")
                 setname2("")
            
                setRelationship("")
               }} type="reset" data-testid="clear">Clear</button>
               <h3 data-testid="answer">{relationship}</h3>
            </div>
        )
    // }
}


export default App;
