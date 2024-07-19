#include <stdio.h>
#include <string>
#include <vector>
#include <iostream>

using namespace std;

string intersect(string a, string b)
{
    string result = "";
    for (int i = 0; i < min(a.size(), b.size()); i++)
    {
        if (a[i] == b[i])
        {
            result += a[i];
        }
        else
        {
            break;
        }
    }
    return result;
}

/*
    Time complexity: O(MN)
    Space complexity: O(1)
 */
string intersectingMethod(vector<string> &input)
{
    string prefix = input[0];
    for (int i = 1; i < input.size(); i++)
    {
        prefix = intersect(prefix, input[i]);
        if (prefix.size() == 0)
            return "";
    }
    return prefix;
}

/*
    Time complexity: O(NlogN + M)
    Space complexity: O(1)
 */
string sortingMethod(vector<string> &input)
{
    sort(input.begin(), input.end());
    string first = input[0];
    string last = input[input.size() - 1];

    string prefix = "";
    for (int i = 0; i < min(first.size(), last.size()); i++)
    {
        if (first[i] == last[i])
        {
            prefix += first[i];
        }
        else
            break;
    }

    return prefix;
}

int main()
{
    vector<string> input_1{"flower", "flow", "flight"};
    vector<string> input_2{"dog", "racecar", "car"};

    cout << "Output for input 1 using intersecting method is: '" << intersectingMethod(input_1) << "'" << endl;
    cout << "Output for input 2 using intersecting method is: '" << intersectingMethod(input_2) << "'" << endl;

    cout << endl;

    cout << "Output for input 1 using sorting method is: '" << sortingMethod(input_1) << "'" << endl;
    cout << "Output for input 2 using sorting method is: '" << sortingMethod(input_2) << "'" << endl;

    return 0;
}