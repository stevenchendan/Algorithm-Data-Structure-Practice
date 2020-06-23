public class Solution {
    public int StrStr(string haystack, string needle) {
        if (needle == null || haystack == null || needle.Length > haystack.Length) {
            return -1;
        }
        
        for (int i = 0; i < haystack.Length - needle.Length + 1; i++) {
            if (haystack.Substring(i, needle.Length) == needle) {
                return i;
            }
        }
        
        return -1;
    }
}

//TODO write test cases