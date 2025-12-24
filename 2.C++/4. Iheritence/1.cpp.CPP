#include<iostream.h>
#include<conio.h>
/*
	Inheritance

	A  ->  Parent / Base
	B  ->  Child / Derived

	5 types of inheritance
	1. single
	2. multilevel
	3. multiple
	4. hierarchical
	5. hybrid
*/
class A
{
	public:
	int abc;
};
class B : public A
{
	public:
	B()
	{
		abc = 80;
		cout<<"abc = "<<abc<<endl;
	}
};
class C : public A
{
	public:
};
void main()
{
	clrscr();
	B b;
	getch();
}