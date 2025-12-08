#include<iostream.h>
#include<conio.h>
/*
	this keyword
	*-> access global variable
	*-> syntex
		this->
*/
class Demo
{
	public:
	int a;//global variable
	Demo(int a)//local variable
	{
		this->a = a;
	}
};
void main()
{
	clrscr();
	Demo d(188);
	cout<<"a = "<<d.a;
	getch();
}