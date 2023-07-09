def count_occurrences(text, char):
    count = 0
    for c in text:
        if c == char:
            count += 1
    return count


# Test the program
line = input("Enter a line of text: ")
character = input("Enter a character to count: ")

occurrences = count_occurrences(line, character)

print("Number of occurrences of", character, "in the given line:", occurrences)
 
output:
Enter a line of text: "what is my name"
Enter a character to count: a
Number of occurrences of a in the given line: 2