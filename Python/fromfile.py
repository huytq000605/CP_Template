import math
def main():
	with open("input.txt", "r") as file:
		testcases = int(file.readline())
		for testcase in range(testcases):
			num = file.readline().strip()
			result = solve(num)
			print(result)

END_WITH = ["00", "25", "50", "75"]
def solve(num: str):
	result = math.inf
	for end in END_WITH:
		pos = 1
		res = 0
		for i in range(len(num) - 1, -1, -1):
			if num[i] == end[pos]:
				pos -= 1
				if pos == -1:
					result = min(result, res)
					break
			else:
				res += 1
	return result


if __name__ == "__main__":
	main()