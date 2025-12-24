#include<iostream.h>
#include<conio.h>

class Copy
{
	public :
	int size;
	int a[10];
	Copy()
	{
		int i;
		//user input
		cout<<"enter size of array : "
		cin>>size;
		for(i=0; i<size; i++)
		{
			cout<<i<<"->";
			cin>>a[i];
		}
	}
	Copy(Copy &d)
	{
		int i;
		size = d.size;
		for(i=0; i<size; i++)
		{
			a[i] = d.a[i];
		}
	}
	void sort()
	{
		//sort logic
		//a[] = {10,5,8,3,20,100}
	}
};

void main()
{
	int i;
	clrscr();

	Copy d;
	Copy c(d);

	for(i=0; i<size; i++)
	{
		if(d.a[i] == c.a[i])
		{
			cout<<d.a[i]<<endl;
		}
	}

	getch();
}