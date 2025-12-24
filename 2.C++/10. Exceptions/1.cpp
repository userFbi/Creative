#include <iostream>
using namespace std;
/*
    handle runtime error/exception
    -> try-catch
    *-> syntex
        try
        {
            // statement    
        } 
        catch (exception &e)
        {
            // statement    
        }
    
*/
int main() {
    cout<<"start\n";
    try
    {
        cout<<"try --> start\n";
        throw runtime_error("my first error");
        cout<<"try --> end\n";
    }
    catch(exception &e)
    {
       cout<<"error\n"; 
       cout<<e.what()<<endl;
    }
    cout<<"end\n";
    return 0;
}