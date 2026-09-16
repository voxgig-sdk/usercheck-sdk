# Usercheck SDK feature factory

from usercheck_sdk.feature.base_feature import UsercheckBaseFeature
from usercheck_sdk.feature.ratelimit_feature import UsercheckRatelimitFeature
from usercheck_sdk.feature.retry_feature import UsercheckRetryFeature
from usercheck_sdk.feature.test_feature import UsercheckTestFeature
from usercheck_sdk.feature.timeout_feature import UsercheckTimeoutFeature


_FEATURES = {
    "base": lambda: UsercheckBaseFeature(),
    "ratelimit": lambda: UsercheckRatelimitFeature(),
    "retry": lambda: UsercheckRetryFeature(),
    "test": lambda: UsercheckTestFeature(),
    "timeout": lambda: UsercheckTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
