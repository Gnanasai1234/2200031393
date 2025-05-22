const Calculator=require('./models/Calculator');

const primenumbers=(req,res)=>{
    const {num}=req.params.p
    if(num.length==0) res.statues(200).json()
    try{
    let primes=[];
    for(let i=1;i<=num;i++){
        let f=true;
        for(let j=2;j<nums[i]/2;j++)
        {
            if(nums[i]%j==0){
                f=false;
                break;
            }
            else{
                continue;
            } 
        }
        if(f==true) primes.push(nums[i])
    }
res.status(200).json({"numbers":primes})
    }
    catch(error){
        res.status(500).json(error.message)
    }
}

const fibonacci=(req,res)=>{
    const {num}=req.params.f
    try{
    let numbers=[0,1]
    for(let i=2;i<=num;i++)
    {
         let j=fib[i-1]+fib[i-2]
         fib.push(j)
    }
    res.status(200).json({"numbers":numbers})
}
catch(error){
    res.status(500).send(error.message)
}
}

const evennumbers=(req,res)=>{
    const {num}=req.params.e
    let evennumbers=[]
    try{
        for(let i=0;i<num;i++)
        {
            if(num[i]%2==0) evennumbers.push(num[i])
        }
    }
    catch(error){
        res.statues(500).send(error.message)
    }

}

const randomnumbers=(req,res)=>{
    const {t}=req.params.r
    try{
        let randomnumbers=[]
        for(let i=0;i<t;i++){
            randomnumbers.push(Math.random())
        }
    }
    catch(error){
        res.status(500).send(error.message)
    }
    }





module.exports=primenumbers,fibonacci,evennumbers,randomnumbers;