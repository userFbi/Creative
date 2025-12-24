#include <stdio.h>
#include <conio.h>

void deleteCharAtPosition(char *str, int position) {
    int len = 0;
    while (str[len] != '\0') {
        len++;
    }
    
    if (position < 0 || position >= len) {
        printf("Invalid position!\n");
        return;
    }
    
    for (int i = position; i < len - 1; i++) {
        str[i] = str[i + 1];
    }
    str[len - 1] = '\0';
}

int main() {
    char str[100];
    int position;
    
    printf("Enter a string: ");
    int i = 0;
    char ch;
    while ((ch = getch()) != '\r' && i < 99) {
        if (ch == '\b' && i > 0) {
            i--;
            printf("\b \b");
        } else if (ch != '\b') {
            str[i++] = ch;
            printf("%c", ch);
        }
    }
    str[i] = '\0';
    printf("\n");
    
    printf("Enter the position to delete (0-based index): ");
    scanf("%d", &position);
    
    deleteCharAtPosition(str, position);
    
    printf("Updated string: %s\n", str);
    
    getch(); // Wait for user input before exiting
    return 0;
}