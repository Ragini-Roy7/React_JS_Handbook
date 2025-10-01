// create a student progress card 
const ProgressCard = ({score})=> {
    let progress; 
    if(score >90){
       progress= "You have scored A+" 
    }else if (score >80 || score<90) {
        progress= "You have scored A"
    }else {
        progress= "You need better scores"
    }
    return <h4>{progress}</h4>
}
export default function Progress(){
    return<ProgressCard score= {97}/>
}