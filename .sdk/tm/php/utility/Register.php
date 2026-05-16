<?php
declare(strict_types=1);

// Usercheck SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

UsercheckUtility::setRegistrar(function (UsercheckUtility $u): void {
    $u->clean = [UsercheckClean::class, 'call'];
    $u->done = [UsercheckDone::class, 'call'];
    $u->make_error = [UsercheckMakeError::class, 'call'];
    $u->feature_add = [UsercheckFeatureAdd::class, 'call'];
    $u->feature_hook = [UsercheckFeatureHook::class, 'call'];
    $u->feature_init = [UsercheckFeatureInit::class, 'call'];
    $u->fetcher = [UsercheckFetcher::class, 'call'];
    $u->make_fetch_def = [UsercheckMakeFetchDef::class, 'call'];
    $u->make_context = [UsercheckMakeContext::class, 'call'];
    $u->make_options = [UsercheckMakeOptions::class, 'call'];
    $u->make_request = [UsercheckMakeRequest::class, 'call'];
    $u->make_response = [UsercheckMakeResponse::class, 'call'];
    $u->make_result = [UsercheckMakeResult::class, 'call'];
    $u->make_point = [UsercheckMakePoint::class, 'call'];
    $u->make_spec = [UsercheckMakeSpec::class, 'call'];
    $u->make_url = [UsercheckMakeUrl::class, 'call'];
    $u->param = [UsercheckParam::class, 'call'];
    $u->prepare_auth = [UsercheckPrepareAuth::class, 'call'];
    $u->prepare_body = [UsercheckPrepareBody::class, 'call'];
    $u->prepare_headers = [UsercheckPrepareHeaders::class, 'call'];
    $u->prepare_method = [UsercheckPrepareMethod::class, 'call'];
    $u->prepare_params = [UsercheckPrepareParams::class, 'call'];
    $u->prepare_path = [UsercheckPreparePath::class, 'call'];
    $u->prepare_query = [UsercheckPrepareQuery::class, 'call'];
    $u->result_basic = [UsercheckResultBasic::class, 'call'];
    $u->result_body = [UsercheckResultBody::class, 'call'];
    $u->result_headers = [UsercheckResultHeaders::class, 'call'];
    $u->transform_request = [UsercheckTransformRequest::class, 'call'];
    $u->transform_response = [UsercheckTransformResponse::class, 'call'];
});
