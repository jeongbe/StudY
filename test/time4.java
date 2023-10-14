package test;

class Solution {
    public int[] solution(int[] arr, int k) {
        int[] answer = {};
        int length = arr.length;
        System.out.println(arr.length);
        System.out.println(k % 2);
        
        if(k % 2 == 1){
            for(int i = 0; i < length; i++){
                answer[i] = arr[i] * k;
            }
        }else if(k % 2 == 0){
            for(int i = 0; i < length; i++){
                answer[i] = arr[i]+ k; 
            }
        }
        
        return answer;
    }
}

public class time4 {
    public static void main(String[] args) {
        
    }
}
