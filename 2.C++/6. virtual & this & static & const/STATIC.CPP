#include<iostream.h>
#include<conio.h>
/*
	static
	*-> access member without object creation
*/
class Base
{
	public:
	static int a;
};
int Base::a;
void main ()
{
	clrscr();
	Base::a = 90;
	cout<<"a="<<Base::a;
	getch();
}
