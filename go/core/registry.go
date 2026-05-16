package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewDomainEntityFunc func(client *UsercheckSDK, entopts map[string]any) UsercheckEntity

