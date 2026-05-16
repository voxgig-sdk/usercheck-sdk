package core

type UsercheckError struct {
	IsUsercheckError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewUsercheckError(code string, msg string, ctx *Context) *UsercheckError {
	return &UsercheckError{
		IsUsercheckError: true,
		Sdk:              "Usercheck",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *UsercheckError) Error() string {
	return e.Msg
}
