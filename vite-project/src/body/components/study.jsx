

export default function Study(){
    const education = [
        {place:"FASTA", date:"05/12/20"},
        {place:"FACULTAD", date:"15/02/19"},
        {place:"FASTA", date:"05/12/20"},
        {place:"FACULTAD", date:"15/02/19"}
    ]
    return(
        
            education.map((e,index)=>{
                    return(
                        <div key={index} className={index % 2 === 0 ? 'study-padding' : 'study-padding2'}>
                            <h2 className={index % 2 === 0 ? 'h2-place' : 'h2-place2'}>{e.place}</h2>
                            <h3 className={index % 2 === 0 ? 'h3-date' : 'h3-date2'}>{e.date}</h3>
                            <span className={index % 2 === 0 ? 'span1' : 'span2'}></span>
                        </div>
                    )
            })
        
    )
}