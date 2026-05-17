package voxgiguserchecksdk

import (
	"github.com/voxgig-sdk/usercheck-sdk/go/core"
	"github.com/voxgig-sdk/usercheck-sdk/go/entity"
	"github.com/voxgig-sdk/usercheck-sdk/go/feature"
	_ "github.com/voxgig-sdk/usercheck-sdk/go/utility"
)

// Type aliases preserve external API.
type UsercheckSDK = core.UsercheckSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type UsercheckEntity = core.UsercheckEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type UsercheckError = core.UsercheckError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewDomainEntityFunc = func(client *core.UsercheckSDK, entopts map[string]any) core.UsercheckEntity {
		return entity.NewDomainEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewUsercheckSDK = core.NewUsercheckSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
