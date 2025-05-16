#include<stdio.h>
#include<conio.h>

class Demo
{
	public :
	Demo()
	{
		cout<<"Constructor"<<endl;
	}
	//Tiled
	~Demo()
	{
		cout<<"Destructor"<<endl;
	}
}

void main ()
{
	clrscr();
	if(10 == 10)
	{
		cout<<"Start of if"<<endl;
		Demo p;
		cout<<"End of if"<<endl;
	}
	cout<<"End of code"<<endl;
	getch();
}
