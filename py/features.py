# Usercheck SDK feature factory

from feature.base_feature import UsercheckBaseFeature
from feature.test_feature import UsercheckTestFeature


def _make_feature(name):
    features = {
        "base": lambda: UsercheckBaseFeature(),
        "test": lambda: UsercheckTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
