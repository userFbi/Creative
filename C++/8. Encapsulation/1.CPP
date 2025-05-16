#include<iostream.h>
#include<conio.h>
/*
	Encapsulation
	-> for access private data
	-> for achive private member
	-> for control data
	-> getter / setter methods
*/
class Demo
{
	private:
	int a;

	public:
	// 10 to 100
	void setA(int a)
	{
		if(a >= 10 && a <= 100)
		{
			this->a = a;
		}
	}
	int getA()
	{
		return a;
	}
};
void main()
{
	clrscr();
	Demo d;
	d.setA(80);
	d.setA(9);
	cout<<d.getA();
	getch();
}