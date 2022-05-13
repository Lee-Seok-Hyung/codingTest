var answer=[];
var answers =[1,2,3,4,5];

var p1=[1,2,3,4,5]; // 5
var p2=[2,1,2,3,2,4,2,5]; // 8
var p3=[3,3,1,1,2,2,4,4,5,5]; // 10
var score =[0,0,0];

for(var i =0;i<answers.length;i++){
    if(answers[i] == p1[i%5]) score[0]++;
    if(answers[i] == p2[i%8]) score[1]++;
    if(answers[i] == p3[i%10]) score[2]++; 
}
var max = Math.max(...score);
for(var i =0;i<3;i++){
    if(score[i] == max) answer.push(i+1);
}
console.log(answer);