class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1:
            return 1
        if n == 2:
            return 2
        
        result = [0] * n
        result[0] = 1
        result[1] = 2
        
        for i in range(2, n):
            result[i] = result[i - 1] + result[i - 2]
        
        return result[-1]

        # if n <= 0:
        #     return 0
        # result = [1,1]
        # for i in range(2, n+1):
        #     result.append(result[i-1] + result[i-2])
        # return result[n]

#这道题容易错误的点是处理好边界问题，因为我们需要i - 1 和 i - 2 所以make sure 从2开始循环
#另外因为是从2开始的所以我们result[0] 和 result[1] 需要在循环之前赋值。这道题就是斐波那契数列
