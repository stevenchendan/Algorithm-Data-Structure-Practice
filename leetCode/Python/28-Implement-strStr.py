# use slicing in python to compare with target string.
def strStr_slicing(haystack: str, needle: str) -> int:
    if haystack == None or needle == None:
        return -1
    
    for i in range(len(haystack) - len(needle) + 1):
        if haystack[i: i +len(needle)] == needle:
            return i
    return -1

#TODO implement strStr with different method


if __name__ == "__main__":
  result = strStr_slicing("", "")
  print(result)




