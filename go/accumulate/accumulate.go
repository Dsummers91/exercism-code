package accumulate

const testVersion = 1

func Accumulate(s []string, f func(string) string) (result []string) {
	result = []string{}
	for i := range s {
		result = append(result, f(s[i]))
	}
	return
}
