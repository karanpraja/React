import math

def sin_approximation(x, accuracy):
    term = x
    sinx = term
    n = 1

    while abs(term) > accuracy:
        term *= -((x * x) / ((2 * n) * (2 * n + 1)))
        sinx += term
        n += 1

    return sinx

# Test the program
x = float(input("Enter the value of x (in radians): "))
accuracy = 0.0001 / 100  # Convert 0.0001% to decimal

approximation = sin_approximation(x, accuracy)
actual_value = math.sin(x)

print("Approximation:", approximation)
print("Actual Value :", actual_value)
