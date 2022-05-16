function solution(progresses, speeds){
    var answer = [];
    // 배포일
    let days =1;
    // 오늘 배포되는 기능의 수
    let cnt = 0;
    // progress : 현재 기능의 작업 진도
    let progress = 0;

    // 모든 작업이 다 배포될 때까지 반복
    while(progresses[0]){
        // 첫번쨰 기능의 작업 진도
        progress = progresses[0] + (speeds[0] * days);
        // 첫번째 기능의 작업진도가 100이상인 경우 배포완료
        if(progress >= 100){
            //배포 완련된 기능의 개수 추가
            cnt++;
            //배포 완료된 작업 제거
            progresses.shift();
            // 배포완료된 작업의 속도 제거
            speeds.shift();
        }

        // 첫 번째 기능의 작업 진도가 100 미만일 경우 배포 불가능
        else{
            // 배포완료된 기능이 있는 경우, answer에 push
            if(cnt>0){
                answer.push(cnt);
            }
            // 배포일 증가(다음날)
            days++;
            //배포 완료된 기능 개수 초기화
            cnt=0;
        }
    }
    // 모든 작업이 다 배포되고 나면, 마지막으로 카운트된 배포 완료 기능 개수 push
    answer.push(cnt);
        
    return answer;
}