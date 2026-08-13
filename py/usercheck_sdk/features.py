# Usercheck SDK feature factory

from usercheck_sdk.feature.base_feature import UsercheckBaseFeature
from usercheck_sdk.feature.test_feature import UsercheckTestFeature


def _make_feature(name):
    features = {
        "base": lambda: UsercheckBaseFeature(),
        "test": lambda: UsercheckTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
