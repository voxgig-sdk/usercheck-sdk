# Usercheck SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

UsercheckUtility.registrar = ->(u) {
  u.clean = UsercheckUtilities::Clean
  u.done = UsercheckUtilities::Done
  u.make_error = UsercheckUtilities::MakeError
  u.feature_add = UsercheckUtilities::FeatureAdd
  u.feature_hook = UsercheckUtilities::FeatureHook
  u.feature_init = UsercheckUtilities::FeatureInit
  u.fetcher = UsercheckUtilities::Fetcher
  u.make_fetch_def = UsercheckUtilities::MakeFetchDef
  u.make_context = UsercheckUtilities::MakeContext
  u.make_options = UsercheckUtilities::MakeOptions
  u.make_request = UsercheckUtilities::MakeRequest
  u.make_response = UsercheckUtilities::MakeResponse
  u.make_result = UsercheckUtilities::MakeResult
  u.make_point = UsercheckUtilities::MakePoint
  u.make_spec = UsercheckUtilities::MakeSpec
  u.make_url = UsercheckUtilities::MakeUrl
  u.param = UsercheckUtilities::Param
  u.prepare_auth = UsercheckUtilities::PrepareAuth
  u.prepare_body = UsercheckUtilities::PrepareBody
  u.prepare_headers = UsercheckUtilities::PrepareHeaders
  u.prepare_method = UsercheckUtilities::PrepareMethod
  u.prepare_params = UsercheckUtilities::PrepareParams
  u.prepare_path = UsercheckUtilities::PreparePath
  u.prepare_query = UsercheckUtilities::PrepareQuery
  u.result_basic = UsercheckUtilities::ResultBasic
  u.result_body = UsercheckUtilities::ResultBody
  u.result_headers = UsercheckUtilities::ResultHeaders
  u.transform_request = UsercheckUtilities::TransformRequest
  u.transform_response = UsercheckUtilities::TransformResponse
}
