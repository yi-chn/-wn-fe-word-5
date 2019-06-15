
var iUnit = 0;      //个位
var iTen = 0;       //十位
var iHundred = 0;   //百位
for(var i = 100;i <= 999;i++ )   //100-999之间
{
    iUnit = i % 10;
    iTen = parseInt(i / 10) % 10;
    iHundred = parseInt(i / 100) % 10;
    
    if(Math.pow(iUnit, 3) + Math.pow(iTen, 3) + Math.pow(iHundred, 3) == i)
    {
        console.log(i);
    }

}
