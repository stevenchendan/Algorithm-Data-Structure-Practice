import math
class Solution:
    """
    @param digits: an list of digits
    @return: list of digits
    """
    def plusOne(self, digits: List[int]) -> List[int]:
        # solution 1: convert to integer and then plus one and then convert back
        if not digits:
          return []
        num_string = ""
        num = 0
        for i in digits:
          num_string += str(i)
        
        num = str(int(num_string) + 1)
        print(num)





        # solution 2: add 1 to last item if equals to 10 then add 1 to one ahead
        if not digits:
          return []
        for i in range():
